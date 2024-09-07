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
                            EI Classroom Connect 
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
                        <div class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                            Developed by :
                        </div>
                        <div class="ml-4 text-sm text-gray-500 sm:text-center dark:text-gray-400">
                            <a href="https://www.linkedin.com/in/suryxnshsingh/" target="_blank" class="hover:underline">Suryansh Singh</a>
                        </div>
                        <div class="ml-4 text-sm text-gray-500 sm:text-center dark:text-gray-400">
                            <a href="https://www.linkedin.com/in/pranshuaf/" target="_blank" class="hover:underline">Pranshu Pandey</a>
                        </div>
                        <div class="ml-4 text-sm text-gray-500 sm:text-center dark:text-gray-400">
                            <a href="https://www.linkedin.com/in/anuj-mishra-4330672b6/" target="_blank" class="hover:underline">Anuj Mishra</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}