// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

// function Mode() {
//   const [Theme, setTheme] = useState("light");
//   const CurrTheme = useSelector((state) => state.auth.Mode);

//   useEffect(() => {
//     setTheme(CurrTheme);
//     document.querySelector("html").classList.remove("dark", "light");
//     document.querySelector("html").classList.add(Theme);
//   }, [CurrTheme, Theme]);

//   console.log(Theme)
//   return <div>Mode</div>;
// }

// export default Mode;
