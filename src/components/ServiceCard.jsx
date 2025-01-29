const ServiceCard = ({iconImage, serviceTitle="Title", serviceDescription="Description"}) => {
  return (
    <div className="inline-flex flex-col items-center justify-center gap-2 bg-slate-100 rounded-xl p-14 shadow-md h-80">
      <img className="h-16" src={iconImage} alt="icon"/>
      <p className="text-xl font-medium text-center">{serviceTitle}</p>
      <p className="text-center">{serviceDescription}</p>
      <a className="text-md font-medium border border-blue-950 px-4 py-1 rounded-lg" href="#">Read More</a>
    </div>
  )
}

export default ServiceCard
