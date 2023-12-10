import Link from "next/link";
import PersonField from "../fields/officeField/PersonField";

export default function PersonCard() {
    return (
        <div className="w-full">
            <PersonField />
            <Link href={"/personalOffice/profileSettings"} className="w-full hoveredMenu duration-300 hover:scale-[1.03] flex justify-center items-center rounded-4 mt-6 ss_lg:mt-4 min-w-[364px] py-5 ss_lg:min-w-full bg-white text-heading-ss-bold ss_lg:py-3">
                Редактировать
            </Link>
        </div>
    )
}