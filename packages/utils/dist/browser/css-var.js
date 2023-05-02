/**
 * Get the value of a globally registered CSS variable
 */
export function cssVar(name, element = document.body) {
    return getComputedStyle(element ?? document.body)
        .getPropertyValue(name)
        .trim();
}
