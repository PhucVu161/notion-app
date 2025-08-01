
const styleByPriority = (priority) => {
  switch (priority) {
    case "High":
      return "border-red-500 bg-red-100 text-red-500";
    case "Medium":
      return "border-yellow-500 bg-yellow-100 text-yellow-500";
    case "Low":
      return "border-green-500 bg-green-100 text-green-500";
    default:
      return "";
  }
};
export default function Priority({priority}) {
  return (
    <span className={`border-2 rounded-sm px-2 ${styleByPriority(priority)}`}>
      {priority}
    </span>
  );
}
