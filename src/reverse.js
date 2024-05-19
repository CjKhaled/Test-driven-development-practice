export default function reverseString(string) {
    return [...string].reduce((start, end) => end + start)
}