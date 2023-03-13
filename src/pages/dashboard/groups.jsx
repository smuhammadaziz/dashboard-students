import React from "react";
import { StatisticsCard } from "@/widgets/cards";
import { statisticsCardsData } from "@/data";
import { lessonsData } from "../../data/lessons-data";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import { Link, NavLink } from "react-router-dom";

export function Groups() {
  return (
    <>
      <div className="mt-12">
        <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
          {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
            <StatisticsCard
              key={title}
              {...rest}
              title={title}
              icon={React.createElement(icon, {
                className: "w-6 h-6 text-white",
              })}
              footer={
                <Typography className="font-normal text-blue-gray-600">
                  <strong className={footer.color}>{footer.value}</strong>
                  &nbsp;{footer.label}
                </Typography>
              }
            />
          ))}
        </div>
        <h2>
          Sinfingiz: <p className="font-bold">10-03</p>
        </h2>
        <h2 className="mt-12">Darslar</h2>
        <div className="mb-12 grid gap-y-10 md:grid-cols-3">
          <Card className=" mt-12 w-96">
            <CardHeader color="blue" className="relative h-56">
              <img
                src="https://www.shutterstock.com/image-vector/poster-name-school-subject-algebra-260nw-1550004938.jpg"
                alt="img-blur-shadow"
                className="h-full w-full"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2">
                Algebra darsi
              </Typography>
              <Typography>Description</Typography>
              <Typography>
                <NavLink to="/dashboard/groups/lessons/0e9b53ad-0aa3-43a6-bb06-b697efd25fd2">
                  <Button className="mt-6">Darsga o'tish</Button>
                </NavLink>
              </Typography>
            </CardBody>
            <CardFooter
              divider
              className="flex items-center justify-between py-3"
            >
              <Typography variant="small">2/5</Typography>
              <Typography variant="small" color="gray" className="flex gap-1">
                14.00 - 16.00
              </Typography>
            </CardFooter>
          </Card>

          <Card className=" mt-12 w-96">
            <CardHeader color="blue" className="relative h-56">
              <img
                src="https://media.istockphoto.com/id/1047570732/vector/english.jpg?s=612x612&w=0&k=20&c=zgafUJxCytevU-ZRlrZlTEpw3mLlS_HQTIOHLjaSPPM="
                alt="img-blur-shadow"
                className="h-full w-full"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2">
                Ingliz tili darsi
              </Typography>
              <Typography>Description</Typography>
              <Typography>
                <NavLink to="/dashboard/groups/lessons/38aaee5e-caa3-4808-a5f6-ee3205451fef">
                  <Button className="mt-6">Darsga o'tish</Button>
                </NavLink>
              </Typography>
            </CardBody>
            <CardFooter
              divider
              className="flex items-center justify-between py-3"
            >
              <Typography variant="small">2/5</Typography>
              <Typography variant="small" color="gray" className="flex gap-1">
                14.00 - 16.00
              </Typography>
            </CardFooter>
          </Card>
          <Card className=" mt-12 w-96">
            <CardHeader color="blue" className="relative h-56">
              <img
                src="https://img.freepik.com/free-vector/science-word-theme_23-2148540555.jpg"
                alt="img-blur-shadow"
                className="h-full w-full"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2">
                Informatika darsi
              </Typography>
              <Typography>Description</Typography>
              <Typography>
                <Button className="mt-6">Darsga o'tish</Button>
              </Typography>
            </CardBody>
            <CardFooter
              divider
              className="flex items-center justify-between py-3"
            >
              <Typography variant="small">2/5</Typography>
              <Typography variant="small" color="gray" className="flex gap-1">
                14.00 - 16.00
              </Typography>
            </CardFooter>
          </Card>
          <Card className=" mt-12 w-96">
            <CardHeader color="blue" className="relative h-56">
              <img
                src="https://assets.thehansindia.com/h-upload/2021/07/18/1089529-physics.webp"
                alt="img-blur-shadow"
                className="h-full w-full"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2">
                Fizika darsi
              </Typography>
              <Typography>Description</Typography>
              <Typography>
                <NavLink to="/dashboard/groups/lessons/341e6e7d-7c98-41bf-8881-a45670423867">
                  <Button className="mt-6">Darsga o'tish</Button>
                </NavLink>
              </Typography>
            </CardBody>
            <CardFooter
              divider
              className="flex items-center justify-between py-3"
            >
              <Typography variant="small">2/5</Typography>
              <Typography variant="small" color="gray" className="flex gap-1">
                14.00 - 16.00
              </Typography>
            </CardFooter>
          </Card>
          <Card className=" mt-12 w-96">
            <CardHeader color="blue" className="relative h-56">
              <img
                src="https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/b3/73/T2-M-377-Geomotry-Displsy-Banner.jpg"
                alt="img-blur-shadow"
                className="h-full w-full"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2">
                Geometriya darsi
              </Typography>
              <Typography>Description</Typography>
              <Typography>
                <Button className="mt-6">Darsga o'tish</Button>
              </Typography>
            </CardBody>
            <CardFooter
              divider
              className="flex items-center justify-between py-3"
            >
              <Typography variant="small">2/5</Typography>
              <Typography variant="small" color="gray" className="flex gap-1">
                14.00 - 16.00
              </Typography>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Groups;
