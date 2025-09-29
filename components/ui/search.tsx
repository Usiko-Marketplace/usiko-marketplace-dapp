// import { setSearchQuery } from '@/Redux/Features/globalSlice';
// import { ChangeEvent, useEffect } from 'react';
import { BiSearch } from "react-icons/bi";
// import { useDispatch } from 'react-redux';

function Search({
  placeholder,
  className,
}: {
  placeholder: string;
  className?: string;
}) {
  // const dispatch = useDispatch();
  // const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const query = e.target.value;
  //   dispatch(setSearchQuery(query));
  // };

  // useEffect(() => {
  //   dispatch(setSearchQuery(''));
  // }, [dispatch]);

  return (
    <div
      className={`flex min-h-[35px] flex-1 items-center gap-2 !rounded-full border border-gray-400 px-3 ${className} `}
    >
      <BiSearch className="searchIcon" />
      <input
        id="search"
        type="text"
        placeholder={placeholder}
        className="text-gray min-h-[35px] flex-1 bg-transparent focus:border-0 focus:outline-0"
        // onChange={handleSearchInputChange}
      />
    </div>
  );
}

export default Search;
