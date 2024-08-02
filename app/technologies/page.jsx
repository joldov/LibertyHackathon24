'use client';

import { Accordion, AccordionTab } from '@lmig/lmds-react';
import Image from 'next/image';
import Link from 'next/link';
import jestIcon from '../../public/images/technologies/jest-icon.png';
import lmdsIcon from '../../public/images/technologies/lmds-icon.png';
import nextjsIcon from '../../public/images/technologies/nextjs-icon.png';
import playwrightIcon from '../../public/images/technologies/playwright-icon.png';
import reactIcon from '../../public/images/technologies/react-icon.png';
import rtlIcon from '../../public/images/technologies/rtl-icon.png';

export default function Page() {
  return (
    <>
      <br />
      <Accordion id="technology-accordion" as="h4">
        <AccordionTab
          id="accordion-tab-nextjs"
          icon={<Image src={nextjsIcon} alt="NextJS Logo" width="25" height="25" />}
          labelVisual="Next"
          key="Next"
        >
          <Link href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
            Next.js
          </Link>
          {` is a React meta-framework that builds on top of existing React conventions and provides more fine-grained control over
           important parts of your application, such as routing, rendering, data fetching, styling, and handling static assets.`}
        </AccordionTab>
        <AccordionTab
          id="accordion-tab-react"
          icon={<Image src={reactIcon} alt="NextJS Logo" width="25" height="25" />}
          labelVisual="React"
          key="React"
        >
          <Link href="https://react.dev/" target="_blank" rel="noopener noreferrer">
            React
          </Link>
          {` is a declarative, efficient, and flexible JavaScript library for building user interfaces.
            It lets you compose complex UIs from small and isolated pieces of code called components.`}
        </AccordionTab>
        <AccordionTab
          id="accordion-tab-lmds"
          icon={
            <Image src={lmdsIcon} alt="Liberty Mutual Design System Logo" width="25" height="25" />
          }
          labelVisual="Liberty Mutual Design System"
          key="Liberty Mutual Design System"
        >
          <Link href="https://designsystem.lmig.com/" target="_blank" rel="noopener noreferrer">
            Liberty Mutual Design System
          </Link>
          {` is a React component library that helps teams at Liberty Mutual
           deliver consistent brand expression across our digital customer journeys.`}
        </AccordionTab>
        <AccordionTab
          id="accordion-tab-jest"
          icon={<Image src={jestIcon} alt="Jest Logo" width="25" height="25" />}
          labelVisual="Jest"
          key="Jest"
        >
          <Link href="https://jestjs.io/" target="_blank" rel="noopener noreferrer">
            Jest
          </Link>
          {
            ' is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase.'
          }
        </AccordionTab>
        <AccordionTab
          id="accordion-tab-reacting-testing"
          icon={<Image src={rtlIcon} alt="React Testing Library Logo" width="25" height="25" />}
          labelVisual="React Testing Library"
          key="React Testing Library"
        >
          <Link
            href="https://testing-library.com/docs/react-testing-library/intro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Testing Library
          </Link>
          {
            ' is a very light-weight solution for testing React components that encourages better testing practices.'
          }
        </AccordionTab>
        <AccordionTab
          id="accordion-tab-playwright"
          icon={<Image src={playwrightIcon} alt="Playwright Logo" width="25" height="25" />}
          labelVisual="Playwright"
          key="Playwright"
        >
          <Link href="https://playwright.dev/" target="_blank" rel="noopener noreferrer">
            Playwright
          </Link>
          {
            ' is an open source framework for web testing and automation. It makes it possible to write feature tests in your favorite BDD or TDD test framework.'
          }
        </AccordionTab>
      </Accordion>
    </>
  );
}
