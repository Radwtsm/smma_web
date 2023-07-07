'use client'
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <div className=" text-white flex justify-between items-center p-1">
    <p className="text-2xl font-bold">SMMA</p>

    <button>
      <MenuIcon fontSize="large" />
    </button>
  </div>
  )
}

export default Navbar