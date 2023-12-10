'use client'

import { useState } from "react"
import MetricsBar from "../../metrics/metrics"
import MetricsModal from "../../modal/MetricsModal"

export type TMetrics = {
    text: string
    percent: number
    hours?: number
    open?: false
    setOpen?: any
}

const METRICS = [
    {
        text: 'время на проекты',
        percent: 15
    },
    {
        text: 'время на проекты',
        percent: 10
    },
    {
        text: 'время на проекты',
        percent: 4
    },
]

export default function MetrisFieldOffice() {
    const [modalMetrics, setMetricsModal] = useState<any>(
        [
            {
                text: '',
                percent: 0,
            }])
    const [openModal, setOpenModal] = useState<boolean>(false)

    const handleOpenModal = () => {
        setOpenModal(true)
        setMetricsModal(METRICS)
    }

    const maxer = (e: number) => {
        if (e >= 14) {
            return 14
        } else return e
    }
    return (
        //@ts-ignore
        <>
            <div onClick={handleOpenModal} className="bg-white w-full h-[189px] ss_lg:h-[144px] ss_lg:w-full ss_lg:p-4 sx_lg:h-[300px] rounded-6 p-6 pt-3">
                <h4 className="text-heading-ss-bold ss_lg:text-text-sm-bold">
                    Метрики
                </h4>

                <div className="flex w-full justify-center sx_lg:gap-6 ss_lg:gap-2 ss_lg:pt-1 flex-col h-full gap-2 pt-5">
                    {
                        METRICS.map((e, index) => (
                            <MetricsBar key={index + e.percent} text={e.text} percent={maxer(e.percent)} hours={e.percent} />
                        ))
                    }
                </div>
            </div>
            
            <MetricsModal data={modalMetrics} setOpenModal={setOpenModal} open={openModal} />
        </>

    )
}