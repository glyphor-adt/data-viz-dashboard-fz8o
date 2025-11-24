import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-muted py-12 mt-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold text-lg mb-4">Product</h4>
            <ul className="text-gray-600">
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">What's New</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="text-gray-600">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="text-gray-600">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Downloads</a></li>
              <li><a href="#">Guides</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="text-gray-600">
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">© 2024 Data Insights, Inc. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" aria-label="Facebook"><Facebook className="w-5 h-5 text-gray-600 hover:text-primary" /></a>
            <a href="#" aria-label="Twitter"><Twitter className="w-5 h-5 text-gray-600 hover:text-primary" /></a>
            <a href="#" aria-label="Instagram"><Instagram className="w-5 h-5 text-gray-600 hover:text-primary" /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin className="w-5 h-5 text-gray-600 hover:text-primary" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
