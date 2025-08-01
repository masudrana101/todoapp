const todotitle = "falsetrue";
const todoDescr = "The strongest trends in the packaging industry all revolve around a circular economy. Why? At least in the European Union, these trends are driven primarily by political pressure and consumer perception regarding packaging. China (and now Thailand) are closing their doors to waste, environmental groups are lobbying to stop plastic pollution in the oceans and the EU continues to strengthen its resource self-reliance. Given the current supply chain crisis, this goal is now more important than ever.";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();



function Card(){
  return (
    <div className="card">
      <h3 className="cardTitle">{todotitle}</h3>
      <p className="cardDesc">{todoDescr}</p>
      <p className="cardFooter">{dateName + "/" + monthName + "/" + currentYear}</p>
    </div>
  );
}


export default Card;