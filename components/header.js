import { withTranslation } from "../services/i18n";
import { useState } from "react";
import constants from "../database/constants.json";
import Image from "next/image";
import Link from "next/link";

import { HiTranslate } from "react-icons/hi";
import { RiArrowDownSLine } from "react-icons/ri";

const Header = ({ t, i18n }) => {
  const [showLanguages, setShowLanguages] = useState(false);

  const setLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="w-full h-20 flex items-center justify-center">
      <div className="py-2 w-11/12 flex flex-row justify-between sm:items-center sm:w-auto">
        <div className="sm:hidden relative w-44 h-8">
          <Link href="/">
            <Image src="/assets/logo.png" layout="fill" />
          </Link>
        </div>
        <ul className="flex flex-row gap-4">
          <li className="cursor-pointer hover:text-purple-500 capitalize sm:text-sm">
            <Link href="/comandos">{t("commands")}</Link>
          </li>
          <li className="cursor-pointer hover:text-purple-500 capitalize sm:text-sm">
            <Link href="/status">Status</Link>
          </li>
          <li className="cursor-pointer hover:text-purple-500 capitalize sm:text-sm">
            <Link href={constants.github_url}>Github</Link>
          </li>
          <li className="cursor-pointer hover:text-purple-500 capitalize sm:text-sm">
            <Link href={constants.add_bot_url}>{t("add")}</Link>
          </li>
          <div
            className="relative cursor-pointer"
            onClick={() => setShowLanguages(!showLanguages)}
          >
            <div className="ml-2 flex flex-row gap-1 justify-center items-center sm:ml-0">
              <HiTranslate size={25} />
              <RiArrowDownSLine size={15} />
            </div>
            {showLanguages && (
              <div class="absolute bg-white shadow w-28 h-20 mt-2 right-0 rounded-lg">
                <ul className="flex flex-col gap-2 justify-center p-2">
                  <li
                    className="text-gray-600 font-semibold hover:text-purple-500 flex flex-row items-center gap-2"
                    onClick={() => setLang("pt")}
                  >
                    <Image
                      src="/assets/brazil-flag.svg"
                      height={20}
                      width={30}
                    />{" "}
                    PT-BR
                  </li>
                  <li
                    className="text-gray-600 font-semibold hover:text-purple-500 flex flex-row items-center gap-2"
                    onClick={() => setLang("en")}
                  >
                    <Image
                      src="/assets/united-states-flag.svg"
                      height={20}
                      width={30}
                    />
                    EN
                  </li>
                </ul>
              </div>
            )}
          </div>
        </ul>
      </div>
    </header>
  );
};

export default withTranslation("header")(Header);
