import React from "react";
import Container from "./Container";
import { Image } from "antd";

const Footer = () => {
  return (
    <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <Container class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <Container class="grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 sm:gap-x-12 gap-y-12">
          <Container class="lg:col-span-2">
            <h2 class="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight">
              1 team.
              <br />
              6+ years.
              <br />
              300+ projects.
              <br />
            </h2>
            <p class="mt-6 text-base text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </Container>

          <Container class="lg:col-span-3 xl:col-span-4">
            <Container class="grid items-center max-w-4xl grid-cols-2 mx-auto lg:grid-cols-4 gap-x-10 gap-y-16">
              <Container>
                <Image
                  class="object-contain w-full h-6 mx-auto"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-1.png"
                  Image
                />
              </Container>

              <Container>
                <Image
                  class="object-contain w-full h-8 mx-auto"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-2.png"
                  Image
                />
              </Container>

              <Container>
                <Image
                  class="object-contain w-full h-8 mx-auto"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-3.png"
                  Image
                />
              </Container>

              <Container>
                <Image
                  class="object-contain w-full mx-auto h-7"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-4.png"
                  Image
                />
              </Container>

              <Container class="hidden lg:block">
                <Image
                  class="object-contain w-full h-8 mx-auto"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-5.png"
                  Image
                />
              </Container>

              <Container class="hidden lg:block">
                <Image
                  class="object-contain w-full h-8 mx-auto"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-6.png"
                  Image
                />
              </Container>

              <Container class="hidden lg:block">
                <Image
                  class="object-contain w-full h-8 mx-auto"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-7.png"
                  Image
                />
              </Container>

              <Container class="hidden lg:block">
                <Image
                  class="object-contain w-full h-8 mx-auto"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-8.png"
                  Image
                />
              </Container>

              <Container class="hidden lg:block">
                <Image
                  class="object-contain w-full h-8 mx-auto"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-9.png"
                  Image
                />
              </Container>

              <Container class="hidden lg:block">
                <Image
                  class="object-contain w-full mx-auto h-7"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-10.png"
                  Image
                />
              </Container>

              <Container class="hidden lg:block">
                <Image
                  class="object-contain w-full h-8 mx-auto"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-11.png"
                  Image
                />
              </Container>

              <Container class="hidden lg:block">
                <Image
                  class="object-contain w-full h-8 mx-auto"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-12.png"
                  Image
                />
              </Container>
            </Container>

            <Container class="flex items-center justify-start mt-10 space-x-3 lg:hidden">
              <Container class="w-2.5 h-2.5 rounded-full bg-blue-600 block"></Container>
              <Container class="w-2.5 h-2.5 rounded-full bg-gray-300 block"></Container>
              <Container class="w-2.5 h-2.5 rounded-full bg-gray-300 block"></Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </section>
  );
};

export default Footer;
