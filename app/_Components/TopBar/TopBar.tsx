import Link from "next/link"
import { IoBag, IoCallOutline, IoLogOutOutline, IoMailOutline, IoPersonOutline, } from "react-icons/io5"
import { FaTruck } from "react-icons/fa"

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-inner">
        <div className="top-bar-left">
          <span className="top-bar-item">
            <FaTruck className="top-bar-icon top-bar-icon--green" aria-hidden />
            <span>Free Shipping on Orders 500 EGP</span>
          </span>
          <span className="top-bar-item">
            <IoBag className="top-bar-icon top-bar-icon--green" aria-hidden />
            <span>New Arrivals Daily</span>
          </span>
        </div>

        <div className="top-bar-right">
          <a href="tel:+18001234567" className="top-bar-item top-bar-link">
            <IoCallOutline className="top-bar-icon top-bar-icon--muted" aria-hidden />
            <span>+1 (800) 123-4567</span>
          </a>
          <a href="mailto:support@freshcart.com" className="top-bar-item top-bar-link">
            <IoMailOutline className="top-bar-icon top-bar-icon--muted" aria-hidden />
            <span>support@freshcart.com</span>
          </a>
          <span className="top-bar-item">
            <IoPersonOutline className="top-bar-icon top-bar-icon--muted" aria-hidden />
            <span>Sign in</span>
          </span>
          <Link href="/register" className="top-bar-item top-bar-link">
            <IoLogOutOutline className="top-bar-icon top-bar-icon--muted" aria-hidden />
            <span>Sign Out</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
