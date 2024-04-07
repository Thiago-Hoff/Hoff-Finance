import { MonthSeleted } from "@/providers/Months/MonthsProvider";
import { Months } from "@/utils/dynamicContent";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export default function InputMont() {
  const { month, handleSetMonth } = useContext(MonthSeleted);

  const handleChangeMonth = useCallback(
    (month?: ChangeEvent<HTMLSelectElement>) => {
      const dateNow = new Date();
      const [getNowMonth] = Months.filter(
        (el) => el.id === dateNow.getMonth() + 1
      );

      if (!month) {
        handleSetMonth(getNowMonth.month);
        return;
      }

      handleSetMonth(month.target.value);
      return;
    },
    [handleSetMonth]
  );

  useEffect(() => {
    handleChangeMonth();
  }, []);

  return (
    <div className={`relative`}>
      <select
        name="select"
        className=" h-8 rounded-lg px-2 outline-none border-2 border-[#D5D5D6]  "
        onChange={(el) => handleChangeMonth(el)}
        value={month}
      >
        {Months.map(({ id, month }) => (
          <option key={id} value={month}>
            {month}
          </option>
        ))}
      </select>
    </div>
  );
}
