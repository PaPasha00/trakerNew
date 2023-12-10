'use client'

import PersonField from "@/components/common/fields/officeField/PersonField";
import MetricsModalCard from "../metrics/metricsModal";
import Header from "../header";
import Image from "next/image";

const METRICS = [
    {
        text: 'время на проекты',
        percent: 25
    },
    {
        text: 'время на проекты',
        percent: 10
    },
    {
        text: 'время на проекты',
        percent: 20
    },
]
type TCardModalMetrics = {
    data: []
    setOpenModal: Function
    open: boolean
}
export default function MetricsModal({ data, setOpenModal, open }: TCardModalMetrics) {
    const maxer = (e: number) => {
        if (e >= 20) {
            return 20
        } else return e
    }

    return (
        <div onClick={() => setOpenModal(false)} className={`w-screen h-screen bg-tr04 z-[100] backdrop-blur-sm fixed top-0 left-0 ${open ? 'flex' : 'hidden'} justify-center items-center`}>
            <div
                className={`w-[700px] pb-6 ss_lg:py-0 ss_lg:bg-bg-gray h-auto ss_lg:w-full ss_lg:h-screen ss_lg:rounded-[0px] ss_lg:px-3`}
            >
                <div className="hidden ss_lg:flex">
                    <Header />
                </div>

                <div className="w-full hidden ss_lg:flex">
                    <PersonField />
                </div>
                <div className="w-full px-4 bg-white rounded-6 pb-6 ss_lg:mt-3">
                        <h4 className="text-heading-ss-bold pt-3 ss_lg:text-text-sm-bold flex justify-between">
                            Метрики
                            <Image height={27} width={27} src={'/closeRed.svg'} alt='person' />
                        </h4>


                    <div className="w-full flex flex-col pt-6 gap-2">
                        {
                            //@ts-ignore
                            data.map((e, index) => (
                                //@ts-ignore
                                <MetricsModalCard key={index + e.percent} text={e.text} percent={maxer(e.percent)} hours={e.percent} />
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>

    )
}