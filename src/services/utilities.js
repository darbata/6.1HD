export const timestampToDate = ({ seconds, nanoseconds }) => {
  if (!seconds) return null
  return new Date(seconds * 1000 + Math.floor((nanoseconds ?? 0) / 1e6))
}