import logoUrl from '../assets/logo.webp'

// Official Assignments4u brand logo (white wordmark + colorful circle mark).
export default function Logo() {
  return (
    <img
      className="logo-img"
      src={logoUrl}
      width="300"
      height="62"
      alt="Assignments4u — Expert Assignment Help for Students"
    />
  )
}
