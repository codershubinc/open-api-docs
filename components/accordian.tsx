'use client'
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


function AccordianComp(
    {
        accordionTrigger,
        accordianContent
    }: {
        accordionTrigger: string,
        accordianContent: React.ReactNode
    }
) {
    return (
        <div>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        {accordionTrigger || 'Is it accessible?'}
                    </AccordionTrigger>
                    <AccordionContent>
                        {accordianContent || 'Yes. It adheres to the WAI-ARIA design pattern. '}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

        </div>
    )
}

export default AccordianComp