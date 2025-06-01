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
      {accordions.map((e) => (
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="flex w-full">
            <AccordionTrigger className="text-xl">{e.q}</AccordionTrigger>
            <AccordionContent className="text-md">{e.a}</AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </main>
  );
};

export default AccordionCompoent;
