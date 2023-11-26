import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = () => {
  return (
    <div className="flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4>Ticket Title</h4>
      <hr className="h-px border-0 bg-page mb-2"></hr>
      <p className="whitespace-pre-wrap">
        Adipiscing irure lorem aute non consequat consequat cupidatat tempor
        occaecat irure. Consequat veniam cupidatat sint minim ea tempor eu
        occaecat labore magna ad qui laborum ad dolor do adipiscing. Mollit
        nulla irure ipsum esse commodo consectetur lorem minim et lorem aliquip.
        Aliquip et enim minim voluptate pariatur ad ad laboris ad in mollit nisi
        sunt deserunt in laboris.
      </p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1">Nov 8, 23, 10:43PM</p>
          <ProgressDisplay />
        </div>
        <div className="ml-auto items-end flex">
          <StatusDisplay />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
