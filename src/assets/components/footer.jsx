export default function Footer(){
    return(
        <div>
            <footer class="bg-white dark:bg-neutral-900">
                <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div class="md:flex md:justify-between">
                    <div class="mb-6 md:mb-0 w-28 flex">
                        <img
                            src="/GS LOGO.png" alt="logo"></img>
                        <div></div>
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
                            Developers:
                        </div>
                        <div class="ml-4 text-sm text-gray-500 sm:text-center dark:text-gray-400">
                            <a href="https://github.com/rajeshkhatri1" class="hover:underline">Rajesh Khatri</a>
                        </div>
                        <div class="ml-4 text-sm text-gray-500 sm:text-center dark:text-gray-400">
                            <a href="https://github.com/rajeshkhatri1" class="hover:underline">Rajesh Khatri</a>
                        </div>
                        <div class="ml-4 text-sm text-gray-500 sm:text-center dark:text-gray-400">
                            <a href="https://github.com/rajeshkhatri1" class="hover:underline">Rajesh Khatri</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}