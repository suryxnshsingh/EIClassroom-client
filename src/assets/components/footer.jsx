import React from "react";
import { LinkPreview } from "./linkpreview";
export default function Footer(){
    return(
        <div>
            <footer class="bg-white dark:bg-neutral-900">
                <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div class="md:flex md:justify-between">
                    <div class="mb-6 md:mb-0 w-28 flex items-center">
                        <img
                            src="/GS LOGO.png" alt="logo"></img>
                        <div className="ml-4">
                            <div className="text-2xl text-white text-nowrap max-sm:hidden">
                            EI Classroom Portal
                                </div>
                                <div className="text-xl text-white font-thin text-nowrap max-sm:hidden">
                            Shri G. S. Institute of Tech. and Science
                                </div>
                                <div className="text-xl text-white font-thin text-nowrap max-sm:hidden">
                            Park Road, Indore
                                </div>
                            </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="/" class="hover:underline">Notes</a>
                                </li>
                                <li>
                                    <a href="/" class="hover:underline">Books</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact Us</h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">+91 987654321</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline">ei.dept@sgsits.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div class="flex justify-center">
                        <div class="text-sm text-white sm:text-center">
                            Crafted by :
                        </div>
                        
                        <LinkPreview 
                            url="https://www.linkedin.com/in/suryxnshsingh/"
                            target="_blank"
                            imageSrc="suryansh.jpg"
                            isStatic
                            className="ml-4 text-sm text-gray-400 sm:text-center"
                            >
                            Suryansh Singh
                        </LinkPreview>
                        <LinkPreview 
                            url="https://www.linkedin.com/in/pranshuaf/"
                            target="_blank"
                            imageSrc="pranshu.jpg"
                            isStatic
                            className="ml-4 text-sm text-gray-400 sm:text-center"
                            >
                            Pranshu Pandey
                        </LinkPreview>
                        <LinkPreview 
                            url="https://www.linkedin.com/in/anuj-mishra-4330672b6/"
                            target="_blank"
                            imageSrc="cmg.png"
                            isStatic
                            className="ml-4 text-sm text-gray-400 sm:text-center"
                            >
                            Anuj Mishra
                        </LinkPreview>
                    </div>
                </div>
            </footer>
        </div>
    )
}