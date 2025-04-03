
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Schools = () => {
  const schools = [
    {
      id: 1,
      name: "Zilla Parishad High School",
      location: "Saroor Nagar, Hyderabad",
      description: "Co-ed",
      image: "https://th.bing.com/th/id/OIP.dHyq7uBevzry_Nyg5j2GmQHaFj?w=245&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      programs: 12
    },
    {
      id: 2,
      name: "Zilla Parishad High School",
      location: "Champapet, Hyderabad",
      description: "Co-ed",
      image: "https://th.bing.com/th/id/OIP.0R1C3YavodVbe9zEyeEXWwHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      programs: 8
    },
    {
      id: 3,
      name: "Zilla Parishad High School",
      location: "Pedda Amberpet, Rangareddy",
      description: "Co-ed, State Board",
      image: "data:image/jpeg;base64,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",
      programs: 25
    },
    {
      id: 4,
      name: "Zilla Parishad Primary School",
      location: "Talegaon, Pune",
      description: "Co-ed",
      image: "https://th.bing.com/th/id/OIP.xuXHFpNssiqJFqWoFgrMlAHaFj?w=197&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      programs: 15
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-orange-50 py-12">
          <div className="container">
            <div className="grid grid-cols-1 gap-6">
              <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Find Schools
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  Discover schools in our network that are looking for volunteers like you
                </p>
              </div>
              <div className="mx-auto w-full max-w-md">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    type="search" 
                    placeholder="Search schools..." 
                    className="w-full rounded-md bg-white pl-8 shadow-sm" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {schools.map((school) => (
                <Card key={school.id} className="overflow-hidden">
                  <img 
                    src={school.image} 
                    alt={school.name} 
                    className="h-48 w-full object-cover" 
                  />
                  <CardHeader>
                    <CardTitle>{school.name}</CardTitle>
                    <CardDescription>{school.location}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{school.description}</p>
                    <div className="mt-2 text-sm text-muted-foreground">
                      {school.programs} volunteer programs available
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link to={`/schools/${school.id}`}>View School</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Schools;
