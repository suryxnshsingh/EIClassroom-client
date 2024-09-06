import Card from "./facultyCard"
import { motion } from "framer-motion"
export default function Faculty() {
    return (

        <div className="flex flex-col" style={{ background: "linear-gradient(180deg, rgba(0,212,255,1) 0%, rgba(1,93,133,1) 0%, rgba(2,6,35,1) 78%)" }}
        >
            <div className="flex justify-center">
                <h1 class="mb-4 text-3xl chakra-petch-bold text-gray-900 dark:text-white md:text-5xl lg:text-6xl md:py-10  "><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Faculty Members</span></h1>

            </div>
            <motion.div className="grid md:grid-cols-3 gap-10 place-items-center md:px-32" initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Card name={"Pranshu Pandey"} designation={"HOD"} employeeId={"EIC/2022/007"} qualification={"B.Tech"} joining={"2022-09-01"} phone={"+91 1234567890"} email={"XJ9L8@example.com"} imgsrc={"/pranshu.jpg"} />
                <Card name={"DS Ajnar"} designation={"HOD"} employeeId={"EIC/2022/007"} qualification={"B.Tech"} joining={"2022-09-01"} phone={"+91 1234567890"} email={"XJ9L8@example.com"} imgsrc={"/pranshu.jpg"} />
                <Card name={"Sanchita Das"} designation={"HOD"} employeeId={"EIC/2022/007"} qualification={"B.Tech"} joining={"2022-09-01"} phone={"+91 1234567890"} email={"XJ9L8@example.com"} imgsrc={"/pranshu.jpg"} />
                <Card name={"Deepali Chaudhary"} designation={"HOD"} employeeId={"EIC/2022/007"} qualification={"B.Tech"} joining={"2022-09-01"} phone={"+91 1234567890"} email={"XJ9L8@example.com"} imgsrc={"/pranshu.jpg"} />
                <Card name={"Anuj Mishra"} designation={"HOD"} employeeId={"EIC/2022/007"} qualification={"B.Tech"} joining={"2022-09-01"} phone={"+91 1234567890"} email={"XJ9L8@example.com"} imgsrc={"/pranshu.jpg"} />
                <Card name={"Tarni Joshi"} designation={"HOD"} employeeId={"EIC/2022/007"} qualification={"B.Tech"} joining={"2022-09-01"} phone={"+91 1234567890"} email={"XJ9L8@example.com"} imgsrc={"/pranshu.jpg"} />
                <Card name={"RS Gamad"} designation={"HOD"} employeeId={"EIC/2022/007"} qualification={"B.Tech"} joining={"2022-09-01"} phone={"+91 1234567890"} email={"XJ9L8@example.com"} imgsrc={"/pranshu.jpg"} />
                <Card name={"Arpita Kadel"} designation={"HOD"} employeeId={"EIC/2022/007"} qualification={"B.Tech"} joining={"2022-09-01"} phone={"+91 1234567890"} email={"XJ9L8@example.com"} imgsrc={"/pranshu.jpg"} />
                <Card name={"Bindu Solanki"} designation={"HOD"} employeeId={"EIC/2022/007"} qualification={"B.Tech"} joining={"2022-09-01"} phone={"+91 1234567890"} email={"XJ9L8@example.com"} imgsrc={"/pranshu.jpg"} />
            </motion.div>
        </div>
    )
}