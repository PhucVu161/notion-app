import Priority from "./PriorityComponent";
import { useState } from "react";
const STATUS = ["All", "Completed", "Todo"];
const PRIORITIES = ["High", "Medium", "Low"];

export default function FilterTodoList({
  textSearch,
  setTextSearch,
  statusSelected,
  setStatusSelected,
  prioritiesSelected,
  setPrioritiesSelected,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectorStyle = isOpen ? "" : "hidden";
  const handleSelectPriority = (item) => {
    setPrioritiesSelected((pre) => (pre.includes(item) ? pre : [...pre, item]));
  };
  const handleDeletePriority = (item) => {
    setPrioritiesSelected((pre) => (pre.filter(preItem => preItem !== item)));
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-center font-bold text-2xl">TODO APP</div>
      <div className="flex flex-col">
        <label className="font-medium" htmlFor="searchText">
          Search
        </label>
        <div class="flex items-center border border-gray-300 px-2 py-1">
          <input
            type="text"
            class="flex-1 outline-none"
            id="searchText"
            placeholder="Nhập việc cần tìm"
            value={textSearch}
            onChange={(e) => {
              setTextSearch(e.target.value);
            }}
          />
          <span class="ml-2 text-gray-500">🔍</span>
        </div>
      </div>
      <div>
        <div className="font-medium">Filter by status</div>
        <div className="flex gap-4">
          {STATUS.map((item) => (
            <label>
              <input
                className="mr-1"
                type="radio"
                value={item}
                checked={item === statusSelected}
                onChange={(e) => {
                  setStatusSelected(e.target.value);
                }}
              />
              {item}
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className="font-medium" htmlFor="priorityText">
          Filter by priority
        </label>
        <button
          className="flex w-full items-center border border-gray-300 h-10 px-2 text-gray-500 relative focus:ring-1 focus:ring-sky-300"
          onClick={(e) => {
            setIsOpen((pre) => !pre);
          }}
        >
          <div
            className={`absolute w-full shadow-2xl top-full left-0 z-10 translate-y-0.5 ${selectorStyle}`}
          >
            {PRIORITIES.map((item) => (
              <div
                className="p-2 bg-white hover:bg-gray-200 text-start"
                onClick={() => {
                  handleSelectPriority(item);
                }}
              >
                <Priority priority={item} />
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            {prioritiesSelected.length < 1
              ? "Chọn loại ưu tiên cần phân loại"
              : prioritiesSelected.map((item) => (
                  <div
                    className="bg-gray-200 px-2 py-1 space-x-2 rounded-sm"
                    key={item}
                  >
                    <Priority priority={item} />
                    <span
                      onClick={(e) => {
                        e.stopPropagation(); //ngăn sự kiện nổi lên, giúp chặn sự kiện hiện selector trong thẻ cha
                        handleDeletePriority(item);
                      }}
                    >
                      X
                    </span>
                  </div>
                ))}
          </div>
        </button>
      </div>
    </div>
  );
}
