import Image from "next/image";
import Logo from "../../public/assets/logo.jpg"

export default function Footer() {
  return (
    <div className="flex justify-center items-center bg-custom p-4">
        <Image
        src={Logo}
        width={200}
        alt="Logo da marca"
        />
    </div>
  )
;}
