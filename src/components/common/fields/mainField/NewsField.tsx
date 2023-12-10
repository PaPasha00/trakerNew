'use client'

import Script from "next/script";
import NewsCard from "../../cards/mainPageCards/NewsCard";
// import TelegramWidget from "../../TgWidget";
import Head from "next/head";

export default function NewsField() {

    return (
        <div className="bg-white rounded-6 h-full w-[calc(100%-384px)] p-6 pt-4 pb-0 overflow-hidden s_lg:w-full s_lg:h-[305px]">
            <h3 className="text-rem-heading-xm s_lg:text-heading-ss-bold pb-2">
                Новости
            </h3>
            <div className="overflow-y-scroll pb-12 s_lg:pb-8 flex flex-col gap-4 scroll-hidden h-full w-full s_lg:gap-2">
                <NewsCard header="Название новости" text="Владелец компании «Аброникс» (производство бутилированной воды «Славная») Александр Усенок рассказал, сколько стоит начать водный бизнес в Беларуси, как удалось найти свою нишу на заполненном конкурентами рынке, и почему кризис его компании должен помочь." />
                <NewsCard header="Название новости" text="Владелец компании «Аброникс» (производство бутилированной воды «Славная») Александр Усенок рассказал, сколько стоит начать водный бизнес в Беларуси, как удалось найти свою нишу на заполненном конкурентами рынке, и почему кризис его компании должен помочь." />
                <NewsCard header="Название новости" text="Владелец компании «Аброникс» (производство бутилированной воды «Славная») Александр Усенок рассказал, сколько стоит начать водный бизнес в Беларуси, как удалось найти свою нишу на заполненном конкурентами рынке, и почему кризис его компании должен помочь." />
                <NewsCard header="Название новости" text="Владелец компании «Аброникс» (производство бутилированной воды «Славная») Александр Усенок рассказал, сколько стоит начать водный бизнес в Беларуси, как удалось найти свою нишу на заполненном конкурентами рынке, и почему кризис его компании должен помочь." />
                <NewsCard header="Название новости" text="Владелец компании «Аброникс» (производство бутилированной воды «Славная») Александр Усенок рассказал, сколько стоит начать водный бизнес в Беларуси, как удалось найти свою нишу на заполненном конкурентами рынке, и почему кризис его компании должен помочь." />
                <NewsCard header="Название новости" text="Владелец компании «Аброникс» (производство бутилированной воды «Славная») Александр Усенок рассказал, сколько стоит начать водный бизнес в Беларуси, как удалось найти свою нишу на заполненном конкурентами рынке, и почему кризис его компании должен помочь." />
                <NewsCard header="Название новости" text="Владелец компании «Аброникс» (производство бутилированной воды «Славная») Александр Усенок рассказал, сколько стоит начать водный бизнес в Беларуси, как удалось найти свою нишу на заполненном конкурентами рынке, и почему кризис его компании должен помочь." />
            </div>
        </div>
    )
}