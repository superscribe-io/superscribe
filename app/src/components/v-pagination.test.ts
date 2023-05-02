import { test, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import VPagination from './v-pagination.vue';
import { GlobalMountOptions } from '@vue/test-utils/dist/types';

const global: GlobalMountOptions = {
	stubs: ['v-icon', 'v-button'],
};

test('Mount component', () => {
	expect(VPagination).toBeTruthy();

	const wrapper = mount(VPagination, {
		props: {
			length: 10,
			totalVisible: 6,
			modelValue: 7,
		},
		global,
	});

	expect(wrapper.html()).toMatchSnapshot();
});

test('length prop', async () => {
	const wrapper = mount(VPagination, {
		props: {
			length: 5,
		},
		global,
	});

	expect(wrapper.element.querySelectorAll('.page').length).toBe(0);

	await wrapper.setProps({ length: 6, totalVisible: 10 });

	expect(wrapper.element.querySelectorAll('.page').length).toBe(6);
});

test('totalVisible prop', async () => {
	const wrapper = mount(VPagination, {
		props: {
			length: 5,
			totalVisible: 3,
		},
		global,
	});

	expect(wrapper.element.querySelectorAll('.page').length).toBe(3);
});

test('showFirstLast prop', async () => {
	const wrapper = mount(VPagination, {
		props: {
			length: 7,
			totalVisible: 3,
			modelValue: 4,
			showFirstLast: true,
		},
		global,
	});

	expect(wrapper.element.querySelectorAll('.page').length).toBe(5);
});
