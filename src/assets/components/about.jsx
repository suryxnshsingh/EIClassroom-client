export default function About() {
    return (
        <div className="flex flex-col items-center justify-center p-10" style={{background: "linear-gradient(0deg, rgba(0,212,255,1) 0%, rgba(1,93,133,1) 0%, rgba(2,6,35,1) 78%)"}}>
            <h1 class="mb-4 text-3xl chakra-petch-bold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">About the Department</span></h1>
        <br></br>
        <div className="flex flex-row px-5">
            <div className="w-2/3 p-4">
                <p class="text-lg chakra-petch-regular text-gray-100 lg:text-2xl py-12 px-20">
                The Department of Electronics and Instrumentation Engineering was established in 1984.
                It came out as an offspring of Electronics Engineering due to enormous 
                development in the field of Electronics and demand of Instrumentation Engineers in the 
                city and its vicinity. Equipped with modern sophisticated instruments, it offers Under 
                Graduate course (B.E. Programme). An M. Tech. course in Microelectronics VLSI Design was 
                started by this Department in 2002. The faculty is well qualified to accept the new 
                challenges in the Electronics and Instrumentation field.
                <br></br><br></br>
                The Department has been recognized as a centre to conduct short term Programme for teaching 
                faculty in the PC based Electronics Instrumentation under UGC vocational courses. New 
                ventures for research and product development in the area of Biomedical and Optical 
                Engineering are being set up under MHRD schemes.
                </p>
            </div>
            <div>
            <div class="m-10 max-w-sm">
  <div class="rounded-lg border bg-[white] px-4 pt-8 pb-10 shadow-xl">
    <div class="relative mx-auto w-36 rounded-full">
      
      <img class="mx-auto h-auto w-full rounded-full" src="/khatri.jpg" alt="" />
    </div>
    <h1 class="my-1 text-center text-xl font-bold leading-8 text-gray-900">Mr. Rajesh Khatri</h1>
    <h3 class="font-lg text-semibold text-center leading-6 text-gray-600">Associate Professor</h3>
    <p class="text-center text-sm leading-6 text-gray-500 hover:text-gray-600">Head of Department - Electronics and Instrumentation Engineering</p>
    <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
      <li class="flex items-center py-3 text-sm">
        <span>Employee Code</span>
        <span class="ml-auto"><span class="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">3300279</span></span>
      </li>
      <li class="flex items-center py-3 text-sm">
        <span>Joined On</span>
        <span class="ml-auto">Apr 08, 2022</span>
      </li>
      <li class="flex items-center py-3 text-sm">
        <span>Phone</span>
        <span class="ml-auto">091-731-2582425</span>
      </li>
      <li class="flex items-center py-3 text-sm">
        <span>Email</span>
        <span class="ml-auto">rajeshkhatri1@rediffmail.com</span>
      </li>
    </ul>
  </div>
</div>

            </div>
        </div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>
    )
}