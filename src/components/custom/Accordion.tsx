import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const AccordionCompoent = () => {
  const accordions = [
    {
      q: 'Is it accessible?',
      a: 'Yes. It adheres to the WAI-ARIA design pattern.',
    },
    {
      q: 'How are you accessible?',
      a: 'Fine what about you accessible 2',
    },
  ];

  return (
    <main className="flex justify-center items-start w-[400px] mx-auto flex-col ">
      <h1 className="text-2xl py-10 grid place-items-center  w-full">
        Accordion Section
      </h1>
      {accordions.map((e) => (
        <Accordion type="single" collapsible className="w-full ">
          <AccordionItem value="item-1" className="">
            <AccordionTrigger className="text-xl">{e.q}</AccordionTrigger>
            <AccordionContent className="text-md">{e.a}</AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </main>
  );
};

export default AccordionCompoent;
