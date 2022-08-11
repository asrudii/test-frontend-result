import { FiSearch, FiX } from 'react-icons/fi';

export default function SearchForm({ onChange, value, reset, onSearch }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-9">
        <input
          value={value}
          className="focus:outline-none border-2 border-gray-200 pl-9 pr-7 py-1 rounded-lg w-80"
          type="text"
          placeholder="Search user here"
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            e?.key === 'Enter' && onSearch();
          }}
        />
        <FiSearch size={20} color="#bbb" className="absolute top-2 left-2" />
        {value && (
          <FiX
            size={20}
            color="#bbb"
            className="absolute top-2 right-2 hover:cursor-pointer"
            onClick={reset}
          />
        )}
      </div>
      <button
        className="bg-blue-500 h-8 px-4 text-white text-sm font-semibold rounded-md hover:opacity-90"
        onClick={onSearch}
      >
        Search
      </button>
    </div>
  );
}
