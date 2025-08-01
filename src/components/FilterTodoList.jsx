import { useState } from "react";
const STATUS = ["All", "Completed", "Todo"];

export default function FilterTodoList({textSearch, setTextSearch, statusSelected, setStatusSelected}) {

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
            onChange={(e) => {setTextSearch(e.target.value)}}
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
                onChange={(e) => {setStatusSelected(e.target.value)}}
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
        <div className="flex items-center border border-gray-300 h-8 px-2 text-gray-500">
          Chọn loại ưu tiên cần phân loại
        </div>
      </div>
    </div>
  );
}
