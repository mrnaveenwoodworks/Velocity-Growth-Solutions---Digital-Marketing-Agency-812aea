import React from "react";
import PropTypes from "prop-types";

const Card = ({
  title,
  subtitle,
  description,
  image,
  imageAlt,
  icon,
  tags,
  link,
  linkText,
  variant = "default",
  hoverEffect = true,
  className = "",
  children,
  ...props
}) => {
  // Card style variants
  const variants = {
    default: "bg-white",
    bordered: "bg-white border border-gray-200",
    elevated: "bg-white shadow-lg",
    subtle: "bg-gray-50",
  };

  // Hover effect styles
  const hoverStyles = hoverEffect 
    ? "transition-all duration-300 hover:shadow-xl hover:-translate-y-1" 
    : "";

  return (
    <div 
      className={`
        rounded-xl overflow-hidden
        ${variants[variant]}
        ${hoverStyles}
        ${className}
      `}
      {...props}
    >
      {/* Card Image */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={imageAlt || title}
            className="w-full h-full object-cover"
          />
          {/* Optional overlay for icons or badges */}
          {icon && (
            <div className="absolute top-4 left-4">
              <div className="h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md">
                {icon}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Card Content */}
      <div className="p-6">
        {/* Header Section */}
        <div className="mb-4">
          {icon && !image && (
            <div className="mb-4">
              <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                {icon}
              </div>
            </div>
          )}
          
          {title && (
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {title}
            </h3>
          )}
          
          {subtitle && (
            <p className="text-sm text-gray-600">
              {subtitle}
            </p>
          )}
        </div>

        {/* Description */}
        {description && (
          <p className="text-gray-700 mb-4">
            {description}
          </p>
        )}

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Custom Content */}
        {children}

        {/* Call to Action Link */}
        {link && (
          <div className="mt-4">
            <a
              href={link}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              {linkText || "Learn More"}
              <span className="ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="16" height="16"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="176" height="176" rx="8" transform="translate(256 0) rotate(90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="144 96 96 96 96 144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="160" y1="160" x2="96" y2="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
              </span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  icon: PropTypes.node,
  tags: PropTypes.arrayOf(PropTypes.string),
  link: PropTypes.string,
  linkText: PropTypes.string,
  variant: PropTypes.oneOf(["default", "bordered", "elevated", "subtle"]),
  hoverEffect: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
};

export default Card;