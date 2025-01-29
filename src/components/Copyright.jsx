const Copyright = () => {
    let currentYear = new Date().getFullYear();
  return (
    <div className="text-center p-3 bg-blue-950 text-white">
      &copy; {currentYear} Company. All rights reserved.
    </div>
  )
}

export default Copyright
