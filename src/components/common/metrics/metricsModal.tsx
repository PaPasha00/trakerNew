'use client'

import { TMetrics } from "../fields/officeField/MetricsField"
export default function MetricsModalCard({ percent, text, hours, open, setOpen }: TMetrics) {

    return (
        <div style={{width: `${percent * 7}%`}} className={`bg-orange-class text-text-sm min-w-[200px] max-w-full ss_lg:text-[8px] flex justify-between ss_lg:h-6 h-8 items-center text-white px-3`}>
            <h5>
                {text}
            </h5>
            <h5>
                {hours}ч
            </h5>
        </div>
    )
}