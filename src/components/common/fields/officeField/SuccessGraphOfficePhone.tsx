'use client'

import { useState } from "react";
import { LineChart } from "../../lineChart";
import GraphModalPhone from "../../modal/GraphsModal";

export default function SeccessGraphPhoneOffice() {
    const [modalGraph, setModalGraph] = useState<any>(
        [
            {
                text: '',
                percent: 0,
            }])
    const [openModal, setOpenModal] = useState<boolean>(false)

    const handleOpenModal = () => {
        setOpenModal(true)
        setModalGraph([
            {
                text: '',
                percent: 0,
            }])
    }

    return (
        <>
            <div onClick={handleOpenModal} className="w-full h-[144px] bg-white rounded-6 p-4 pt-3">
                <h5 className="ss_lg:text-text-sm-bold">
                    График продуктивности
                </h5>
                <div className="w-full h-full pt-2 pb-1 flex justify-center">
                    <LineChart />
                </div>
            </div>

            <GraphModalPhone data={modalGraph} setOpenModal={setOpenModal} open={openModal} />
        </>

    )
}