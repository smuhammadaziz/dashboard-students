import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Button,
} from "@material-tailwind/react";

export default function Homeworks() {
  return (
    <div className="mt-12 flex">
      <Card className="max-w-[24rem] overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img
            src="https://s3.amazonaws.com/www.mathnasium.com/upload/596/images/Algebra%20Logo.jpg"
            alt="ui/ux review check"
            //   height="400"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray">
            Algebra
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
            Trigonometrik tenglamalarga oid misollar yechish
          </Typography>
          <Button variant="gradient" className="mt-6">
            Ko'rish
          </Button>
        </CardBody>

        <CardFooter className="flex items-center justify-between">
          <div className="flex items-center -space-x-3">
            <Tooltip content="Natali Craig">
              <Avatar
                size="sm"
                variant="circular"
                alt="natali craig"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                className="border-2 border-white hover:z-10"
              />
            </Tooltip>
            <Tooltip content="Candice Wu">
              <Avatar
                size="sm"
                variant="circular"
                alt="candice wu"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                className="border-2 border-white hover:z-10"
              />
            </Tooltip>
          </div>
          <Typography className="font-normal">19:00, 15.03.2023</Typography>
        </CardFooter>
      </Card>
      <Card className="ml-5 max-w-[24rem] overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img
            src="https://images.theconversation.com/files/191827/original/file-20171025-25516-g7rtyl.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop"
            alt="ui/ux review check"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray">
            Fizika
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
            Izotermik jarayonlarga oid masalalar ishlash
          </Typography>
          <Button variant="gradient" className="mt-6">
            Ko'rish
          </Button>
        </CardBody>
        <CardFooter className="flex items-center justify-between">
          <div className="flex items-center -space-x-3">
            <Tooltip content="Natali Craig">
              <Avatar
                size="sm"
                variant="circular"
                alt="natali craig"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                className="border-2 border-white hover:z-10"
              />
            </Tooltip>
            <Tooltip content="Candice Wu">
              <Avatar
                size="sm"
                variant="circular"
                alt="candice wu"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                className="border-2 border-white hover:z-10"
              />
            </Tooltip>
          </div>
          <Typography className="font-normal">10:00, 17.03.2023</Typography>
        </CardFooter>
      </Card>
    </div>
  );
}
