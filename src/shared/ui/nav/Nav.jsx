import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div className='w-full h-[80px] flex justify-between items-center'>
            <div className="flex gap-8">
                <Link to="/" className="flex items-center justify-center gap-1">
                    <img src="../public/penguin-logo.png" alt="Dev@Deakin Logo" className="h-12 w-auto tanslate-y-3" />
                    <h1 className="text-2xl">DEV@DEAKIN</h1>
                </Link>
                <NavigationMenu viewport={false}>
                    <NavigationMenuList className="gap-8">

                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Post</NavigationMenuTrigger>
                            <NavigationMenuContent className="z-50">
                                <ul className="grid w-[300px] gap-2">
                                    <NavigationMenuLink asChild>
                                        <Link to="/post">
                                            <div className="font-medium">Write an article</div>
                                            <div className="text-muted-foreground">Inspire or assist other students with a helpful resource.</div>
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link to="post">
                                            <div className="font-medium">Ask a question</div>
                                            <div className="text-muted-foreground">Get help or spark an insightful discussion with likeminded peers.</div>
                                        </Link>
                                    </NavigationMenuLink>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
                            <NavigationMenuContent className="z-50">
                                <ul className="grid w-[200px] gap-2">
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link to="questions">Questions</Link>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild>
                                            <Link to="articles">Articles</Link>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>


                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link to="pricing">Pricing</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                    </NavigationMenuList> 
                </NavigationMenu>
            </div>
            <div className="flex gap-8">
                <Link to="login"><Button variant="secondary w-full h-full">Login</Button></Link>
                <Link to="signup"><Button>Sign Up</Button></Link>
            </div>
        </div>
    )
}

export default Nav