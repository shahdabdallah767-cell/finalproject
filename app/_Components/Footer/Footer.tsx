import React from 'react'
import Link from 'next/link'
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoYoutube,
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
  IoRefreshOutline,
  IoLockClosedOutline,
  IoHeadsetOutline,
  IoCartOutline
} from 'react-icons/io5'
import { FaTruck, FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Features Section */}
      <div className="bg-[#f0fdf0] py-10 px-6 md:px-20 border-t border-b border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex items-center gap-4">
            <div className="p-2.5 bg-white rounded-full shadow-sm">
              <FaTruck className="text-lg text-[#0aad0a]" />
            </div>
            <div>
              <h4 className="text-xs font-medium text-gray-900">Free Shipping</h4>
              <p className="text-[10px] text-gray-600">On orders over 500 EGP</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-2.5 bg-white rounded-full shadow-sm">
              <IoRefreshOutline className="text-lg text-[#0aad0a]" />
            </div>
            <div>
              <h4 className="text-xs font-medium text-gray-900">Easy Returns</h4>
              <p className="text-[10px] text-gray-600">14-day return policy</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-2.5 bg-white rounded-full shadow-sm">
              <IoLockClosedOutline className="text-lg text-[#0aad0a]" />
            </div>
            <div>
              <h4 className="text-xs font-medium text-gray-900">Secure Payment</h4>
              <p className="text-[10px] text-gray-600">100% secure checkout</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-2.5 bg-white rounded-full shadow-sm">
              <IoHeadsetOutline className="text-lg text-[#0aad0a]" />
            </div>
            <div>
              <h4 className="text-xs font-medium text-gray-900">24/7 Support</h4>
              <p className="text-[10px] text-gray-600">Contact us anytime</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="bg-[#101828] text-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
          {/* Logo and Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-[#0aad0a] lowercase">
              <IoCartOutline className="text-2xl" />
              <span className="text-white">freshcart</span>
            </Link>
            <p className="text-[11px] text-gray-400 max-w-sm leading-loose">
              FreshCart is your one-stop destination for quality products. From fresh food to electronics, we bring you the best brands at competitive prices with a seamless shopping experience.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-[11px] text-gray-400">
                <IoCallOutline className="text-[#0aad0a] text-sm" />
                <span>+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center gap-4 text-[11px] text-gray-400">
                <IoMailOutline className="text-[#0aad0a] text-sm" />
                <span>support@freshcart.com</span>
              </div>
              <div className="flex items-center gap-4 text-[11px] text-gray-400">
                <IoLocationOutline className="text-[#0aad0a] text-sm" />
                <span>123 Commerce Street, New York, NY 10001</span>
              </div>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#0aad0a] transition-all duration-300 text-xs">
                <IoLogoFacebook />
              </Link>
              <Link href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#0aad0a] transition-all duration-300 text-xs">
                <IoLogoTwitter />
              </Link>
              <Link href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#0aad0a] transition-all duration-300 text-xs">
                <IoLogoInstagram />
              </Link>
              <Link href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#0aad0a] transition-all duration-300 text-xs">
                <IoLogoYoutube />
              </Link>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-[12px] font-medium mb-8 uppercase tracking-widest text-gray-200">Shop</h4>
            <ul className="space-y-4 text-[11px] text-gray-400">
              <li><Link href="#" className="hover:text-[#0aad0a] transition-colors">All Products</Link></li>
              <li><Link href="#" className="hover:text-[#0aad0a] transition-colors">Categories</Link></li>
              <li><Link href="#" className="hover:text-[#0aad0a] transition-colors">Brands</Link></li>
              <li><Link href="#" className="hover:text-[#0aad0a] transition-colors">Electronics</Link></li>
              <li><Link href="#" className="hover:text-[#0aad0a] transition-colors">Men's Fashion</Link></li>
              <li><Link href="#" className="hover:text-[#0aad0a] transition-colors">Women's Fashion</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-medium mb-8 uppercase tracking-widest text-gray-200">Account</h4>
            <ul className="space-y-4 text-[11px] text-gray-400">
              <li><Link href="#" className="hover:text-[#0aad0a] transition-colors">My Account</Link></li>
              <li><Link href="#" className="hover:text-[#0aad0a] transition-colors">Order History</Link></li>
              <li><Link href="#" className="hover:text-[#0aad0a] transition-colors">Wishlist</Link></li>
              <li><Link href="#" className="hover:text-[#0aad0a] transition-colors">Shopping Cart</Link></li>
              <li><Link href="#" className="hover:text-[#0aad0a] transition-colors">Sign In</Link></li>
              <li><Link href="#" className="hover:text-[#0aad0a] transition-colors">Create Account</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-medium mb-8 uppercase tracking-widest text-gray-200">Support</h4>
            <ul className="space-y-4 text-[11px] text-gray-400">
              <li><Link href="#" className="hover:text-[#0aad0a] transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-[#0aad0a] transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-[#0aad0a] transition-colors">Shipping Info</Link></li>
              <li><Link href="#" className="hover:text-[#0aad0a] transition-colors">Returns & Refunds</Link></li>
              <li><Link href="#" className="hover:text-[#0aad0a] transition-colors">Track Order</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-[#101828] border-t border-gray-800 py-5 px-6 md:px-20 text-[10px] text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 FreshCart. All rights reserved.</p>
          <div className="flex gap-5 items-center">
            <Link href="#" className="hover:text-[#0aad0a] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#0aad0a] transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-[#0aad0a] transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

