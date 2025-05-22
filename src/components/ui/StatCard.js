import React from "react";
import PropTypes from "prop-types";

const StatCard = ({
  title,
  value,
  icon,
  trend,
  trendValue,
  description,
  variant = "default",
  animated = true,
  className = "",
  ...props
}) => {
  // Predefined variants
  const variants = {
    default: "bg-white",
    gradient: "bg-gradient-to-br from-blue-500 to-blue-700",
    outlined: "bg-white border-2 border-gray-200",
    subtle: "bg-gray-50"
  };

  // Text color based on variant
  const textColors = {
    default: "text-gray-900",
    gradient: "text-white",
    outlined: "text-gray-900",
    subtle: "text-gray-900"
  };

  // Secondary text color based on variant
  const secondaryColors = {
    default: "text-gray-600",
    gradient: "text-blue-100",
    outlined: "text-gray-600",
    subtle: "text-gray-600"
  };

  // Icon background color based on variant
  const iconBgColors = {
    default: "bg-blue-100 text-blue-600",
    gradient: "bg-white/20 text-white",
    outlined: "bg-blue-100 text-blue-600",
    subtle: "bg-blue-100 text-blue-600"
  };

  // Trend colors
  const getTrendColor = (trend) => {
    if (trend === "up") return "text-green-500";
    if (trend === "down") return "text-red-500";
    return "text-gray-500";
  };

  // Trend icon based on direction
  const getTrendIcon = (trend) => {
    if (trend === "up") return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="16" height="16"><rect width="256" height="256" fill="none"/><polyline points="104 80 152 32 200 80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M56,224a96,96,0,0,0,96-96V32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>;
    if (trend === "down") return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="16" height="16"><rect width="256" height="256" fill="none"/><polyline points="152 176 104 224 56 176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M200,32a96,96,0,0,0-96,96v96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>;
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="16" height="16"><rect width="256" height="256" fill="none"/><polyline points="232 56 136 152 96 112 24 184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="232 120 232 56 168 56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>;
  };

  return (
    <div 
      className={`
        ${variants[variant]}
        rounded-xl shadow-lg p-6
        ${animated ? "transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" : ""}
        ${className}
      `}
      {...props}
    >
      {/* Header with icon */}
      <div className="flex items-start justify-between mb-4">
        <div className={`rounded-full p-3 ${iconBgColors[variant]}`}>
          {icon}
        </div>
        
        {trend && (
          <div className={`flex items-center ${getTrendColor(trend)}`}>
            {getTrendIcon(trend)}
            <span className="ml-1 text-sm font-medium">
              {trendValue}
            </span>
          </div>
        )}
      </div>

      {/* Value and title */}
      <div className="mb-2">
        <div className={`text-3xl font-bold ${textColors[variant]} mb-1`}>
          {value}
        </div>
        <div className={`text-sm font-medium ${secondaryColors[variant]}`}>
          {title}
        </div>
      </div>

      {/* Optional description */}
      {description && (
        <div className={`text-sm ${secondaryColors[variant]} mt-4`}>
          {description}
        </div>
      )}
    </div>
  );
};

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  icon: PropTypes.node,
  trend: PropTypes.oneOf(["up", "down", "neutral"]),
  trendValue: PropTypes.string,
  description: PropTypes.string,
  variant: PropTypes.oneOf(["default", "gradient", "outlined", "subtle"]),
  animated: PropTypes.bool,
  className: PropTypes.string
};

// Example usage:
// <StatCard
//   title="Total Views"
//   value="2.4M"
//   icon={<GraphIcon />}
//   trend="up"
//   trendValue="+14%"
//   description="Compared to last month"
//   variant="gradient"
// />

export default StatCard;