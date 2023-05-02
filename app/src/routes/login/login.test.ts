import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import { GlobalMountOptions } from '@vue/test-utils/dist/types';
import { setActivePinia } from 'pinia';
import { beforeEach, expect, test, vi } from 'vitest';
import { createI18n } from 'vue-i18n';

import vIcon from '@/components/v-icon/v-icon.vue';
import vImage from '@/components/v-image.vue';
import vSelect from '@/components/v-select/v-select.vue';
import MarkdownDirective from '@/directives/markdown';
import { useAppStore } from '@/stores/app';
import publicView from '@/views/public/public-view.vue';
import ContinueAs from './components/continue-as.vue';
import SsoLinks from './components/sso-links.vue';
import LdapForm from './components/login-form/ldap-form.vue';
import LoginForm from './components/login-form/login-form.vue';
import { useServerStore } from '@/stores/server';

import LoginComponent from './login.vue';

const i18n = createI18n({ legacy: false });

const global: GlobalMountOptions = {
	components: { publicView, vSelect, vIcon, vImage },
	directives: { md: MarkdownDirective },
	stubs: { publicView: false },
	plugins: [i18n],
};

// silences locale message not found warnings
vi.spyOn(i18n.global, 't').mockImplementation((key: any) => key);

beforeEach(() => {
	setActivePinia(
		createTestingPinia({
			createSpy: vi.fn,
			stubActions: false,
			initialState: {
				serverStore: {
					info: {
						project: {
							project_name: null,
							project_descriptor: null,
							project_logo: null,
							project_color: '#6644FF', // ensure Color() usage in public-view doesn't cause error
							default_language: null,
							public_foreground: null,
							public_background: null,
							public_note: null,
							custom_css: null,
						},
					},
				},
			},
		})
	);
});

test('show continue-as when authenticated', () => {
	const appStore = useAppStore();
	appStore.authenticated = true;

	const wrapper = mount(LoginComponent, { global, shallow: true });

	expect(wrapper.findComponent(ContinueAs).exists()).toBe(true);
	expect(wrapper.findComponent(LdapForm).exists()).toBe(false);
	expect(wrapper.findComponent(LoginForm).exists()).toBe(false);
	expect(wrapper.findComponent(SsoLinks).exists()).toBe(false);
});

test('show login form and sso links when unauthenticated', () => {
	const appStore = useAppStore();
	appStore.authenticated = false;

	const wrapper = mount(LoginComponent, { global, shallow: true });

	expect(wrapper.findComponent(ContinueAs).exists()).toBe(false);
	expect(wrapper.findComponent(LdapForm).exists()).toBe(false);
	expect(wrapper.findComponent(LoginForm).exists()).toBe(true);
	expect(wrapper.findComponent(SsoLinks).exists()).toBe(true);
});

test('show login form when unauthenticated and driver is local', () => {
	const appStore = useAppStore();
	appStore.authenticated = false;

	const serverStore = useServerStore();
	serverStore.auth.disableDefault = true;
	serverStore.auth.providers = [{ driver: 'local', name: 'localProvider' }];

	const wrapper = mount(LoginComponent, { global, shallow: true });

	expect(wrapper.findComponent(ContinueAs).exists()).toBe(false);
	expect(wrapper.findComponent(LdapForm).exists()).toBe(false);
	expect(wrapper.findComponent(LoginForm).exists()).toBe(true);
	expect(wrapper.findComponent(SsoLinks).exists()).toBe(true);
});

test('show ldap form when unauthenticated and driver is ldap', () => {
	const appStore = useAppStore();
	appStore.authenticated = false;

	const serverStore = useServerStore();
	serverStore.auth.disableDefault = true;
	serverStore.auth.providers = [{ driver: 'ldap', name: 'ldapProvider' }];

	const wrapper = mount(LoginComponent, { global, shallow: true });

	expect(wrapper.findComponent(ContinueAs).exists()).toBe(false);
	expect(wrapper.findComponent(LdapForm).exists()).toBe(true);
	expect(wrapper.findComponent(LoginForm).exists()).toBe(false);
	expect(wrapper.findComponent(SsoLinks).exists()).toBe(true);
});
