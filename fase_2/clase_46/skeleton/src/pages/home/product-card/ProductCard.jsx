import { ButtonPrimary } from "@/components/buttons";
import { Skeleton } from "@/components/skeleton";
import { Text } from "@/components/texts";
import { CardActionArea, Card as MuiCard } from "@mui/material";
import PropTypes from "prop-types";
import "./product-card.scss";

const ProductCard = (props) => {
    const {
        isLoading,
        imagePath,
        imageAlt,
        title,
        description,
        className,
        ...restProps
    } = props;

    const classes = `product-card ${className ?? ""}`;

    return (
        <MuiCard className={classes} {...restProps}>
            <Skeleton className="product-card__image--skeleton" isLoading={isLoading} variant="rectangular">
                <CardActionArea>
                    <img className="product-card__image" src={imagePath} alt={imageAlt}/>
                </CardActionArea>
            </Skeleton>

            <div className="product-card__content">
                <Skeleton className="product-card__title--skeleton" isLoading={isLoading}>
                    <Text className="product-card__title" variant="h3">{title}</Text>
                </Skeleton>
                <Skeleton className="product-card__description--skeleton" isLoading={isLoading}>
                    <Text className="product-card__description" variant="p">{description}</Text>
                </Skeleton>
            </div>

            <div className="product-card__actions">
                <Skeleton className="product-card__actions--skeleton" isLoading={isLoading}>
                    <ButtonPrimary size="sm">Ver más</ButtonPrimary>
                </Skeleton>
            </div>
        </MuiCard>
    );
};

ProductCard.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    imagePath: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default ProductCard;