'use client'

import { LineChart } from "../../lineChart"

export type TGraphField = {
    name: string
    params: []
}

export default function GraphFieldOffice({name, params}: TGraphField) {
    return (
        <div className="bg-white h-[230px] sx_lg:h-[300px] rounded-6 p-6 pt-3">
            <h4 className="text-heading-ss-bold">
                {name}
            </h4>

            <div className="w-full h-full pt-2 pb-5 flex justify-center">
                <LineChart />
            </div>
        </div>
    )
}