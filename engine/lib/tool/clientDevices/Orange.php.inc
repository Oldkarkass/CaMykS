<?php
/**
 * @brief Orange client devices specific methods
 * @details Engine / Tool Library
 * @file engine/lib/tool/clientDevices/Orange.php.inc
 * @author CaMykS Team <camyks.contact@gmail.com>
 * @version 1.0.2
 * @date Creation: Sep 2018
 * @date Modification: Jan 2019
 * @copyright 2018 - 2019 CaMykS Team
 * @note This program is distributed as is - WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * @warning This library is not loaded with CaMykS initialisation.
 */

/**
 * Return Orange client device information from a known list.
 * @param mixed $deviceCode
 * @return array
 */
function get_OrangeClientDevice($deviceCode='') {
    $deviceList = array(
        'Nura'      => array('platform_year' => 2015),
        'Nura 2'    => array('platform_year' => 2016),
        'Neva 80'   => array('platform_year' => 2016),
        'Rise51'    => array('platform_model' => 'Rise 51', 'platform_year' => 2016),
    );

    /* Check for returning list */
    if ($deviceCode === false)
      return $deviceList;

    /* Initialise result. */
    $result = array(
        'platform_company'  => 'Orange',
        'platform_model'    => $deviceCode,
        'platform_type'     => 'handheld',
        'platform_format'   => 'handheld',
    );

    /* Check if device is a known device. */
    if (!array_key_exists($deviceCode, $deviceList))
        return $result;

    /* Return result. */
    return array_merge($result, $deviceList[$deviceCode]);
}
?>