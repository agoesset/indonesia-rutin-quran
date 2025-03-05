import { defineCollection, z } from 'astro:content';

const benefits = defineCollection({
  type: 'data',
  schema: z.object({
    items: z.array(z.object({
      title: z.string(),
      description: z.string()
    }))
  })
});

const testimonials = defineCollection({
  type: 'data',
  schema: z.object({
    items: z.array(z.object({
      name: z.string(),
      role: z.string(),
      content: z.string(),
      image: z.string()
    }))
  })
});

const products = defineCollection({
  type: 'data',
  schema: z.object({
    items: z.array(z.object({
      name: z.string(),
      price: z.number(),
      description: z.string(),
      image: z.string()
    }))
  })
});

const team = defineCollection({
  type: 'data',
  schema: z.object({
    items: z.array(z.object({
      name: z.string(),
      role: z.string(),
      image: z.string()
    }))
  })
});

const faq = defineCollection({
  type: 'data',
  schema: z.object({
    items: z.array(z.object({
      question: z.string(),
      answer: z.string()
    }))
  })
});

export const collections = {
  'benefits': benefits,
  'testimonials': testimonials,
  'products': products,
  'team': team,
  'faq': faq
};
