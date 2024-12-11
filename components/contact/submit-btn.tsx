// import React from 'react';
// import {FaPaperPlane} from "react-icons/fa";
// import {useFormStatus} from "react-dom";
//
// const SubmitBtn = () => {
//     const {pending} = useFormStatus();
//     return (
//         <button type="submit"
//                 className={"mt-2.5 group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white dark:bg-gray-100 dark:text-black outline-none transition-all rounded-full focus:scale-110 hover:scale-110 active:scale-105 disabled:scale-100 disabled:bg-opacity-65"}
//
//                 disabled={pending}
//         >
//
//             {
//                 pending ? <div className={"w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin"}/> :
//                     <>
//                         Send{" "} <FaPaperPlane
//                         className={"text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"}/>
//                     </>
//             }
//
//         </button>
//     )
// };
//
// export default SubmitBtn;
