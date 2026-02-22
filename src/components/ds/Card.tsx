export interface CardProps {
  href: string;
  title: string;
  tagline: string;
  year?: string;
  image?: string;
  className?: string;
}

const imgPlaceholder = '/images/work/placeholder.svg';

export function Card({ href, title, tagline, year, image, className = '' }: CardProps) {
  const imgSrc = image || imgPlaceholder;
  const classes =
    'group block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-offset-gray-900 ' +
    className;

  return (
    <a href={href} className={classes.trim()}>
      <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-700">
        <img
          src={imgSrc}
          alt=""
          className="h-full w-full object-cover transition-transform group-hover:scale-[1.02]"
          loading="lazy"
          width={800}
          height={450}
        />
      </div>
      <div className="p-5">
        {year && (
          <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
            {year}
          </p>
        )}
        <h2 className="mt-1 text-lg font-semibold text-gray-900 group-hover:text-accent dark:text-gray-200">
          {title}
        </h2>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{tagline}</p>
      </div>
    </a>
  );
}
