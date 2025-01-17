export const formatDate = function (date) {
    return new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date(date));
};

export const formatDateForInputValue = function (arg) {
    const date = new Date(arg);
    const mm = date.getMonth() + 1;
    const dd = date.getDate();
    const yyyy = date.getFullYear();
    return `${yyyy}-${mm < 10 ? `0${mm}` : mm}-${dd < 10 ? `0${dd}` : dd}`;
};

export function getFlagEmoji(countryCode) {
    const codePoints = countryCode
        .toUpperCase()
        .split("")
        .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}
