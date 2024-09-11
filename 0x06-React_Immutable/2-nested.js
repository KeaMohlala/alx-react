export default function accessImmutableObject(object, array) {
    return array.reduce((acc, key) => {
        if (acc && typeof acc === 'object') {
            return acc[key];
        }
        return undefined;
    }, object);
}
