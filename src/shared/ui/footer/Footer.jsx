import { Link } from 'react-router-dom'
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const Footer = () => {
  return (
    <footer className="w-full p-8">
      <div className="flex justify-between">
        {/* Explore */}
        <Card className="shadow-none border-0 bg-transparent ">
          <CardContent className="p-0">
            <h3 className="font-semibold mb-3">Explore</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:underline">Home</Link></li>
              <li><Link to="/questions" className="text-sm hover:underline">Questions</Link></li>
              <li><Link to="/articles" className="text-sm hover:underline">Articles</Link></li>
              <li><Link to="/tutorials" className="text-sm hover:underline">Tutorials</Link></li>
            </ul>
          </CardContent>
        </Card>

        {/* Support */}
        <Card className="shadow-none border-0 bg-transparent ">
          <CardContent className="p-0">
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-sm hover:underline">FAQ</Link></li>
              <li><Link to="/help" className="text-sm hover:underline">Help</Link></li>
              <li><Link to="/contact" className="text-sm hover:underline">Contact Us</Link></li>
            </ul>
          </CardContent>
        </Card>

        {/* Social */}
        <Card className="shadow-none border-0 bg-transparent ">
          <CardContent className="p-0">
            <h3 className="font-semibold mb-3">Stay Connected</h3>
            <ul className="space-y-2">
              <li><Link to="/facebook" className="text-sm hover:underline">Facebook</Link></li>
              <li><Link to="/instagram" className="text-sm hover:underline">Instagram</Link></li>
              <li><Link to="/twitter" className="text-sm hover:underline">Twitter</Link></li>
            </ul>
          </CardContent>
        </Card>

      </div>

      <Separator className="my-8" />

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm">
        <h2 className="font-semibold mb-4 md:mb-0">DEV@Deakin 2025</h2>
        <ul className="flex space-x-6">
          <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
          <li><Link to="/terms" className="hover:underline">Terms</Link></li>
          <li><Link to="/code-of-conduct" className="hover:underline">Code of Conduct</Link></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer