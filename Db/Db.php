<?php

namespace Db;

class Db extends \PDO {
    public function __construct($dsn = null, $username = null, $passwd = null, $options = array()) {

        $dsn = isset($dsn) ? $dsn : "mysql:host=" . DB_HOST .";port=". DB_PORT .";dbname=" . DB_SCHEMA;
        $username = isset($username) ? $username : DB_LOGIN;
        $passwd = isset($passwd) ? $passwd : DB_PASSWORD;

        $options = array(\PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'UTF8'");

        try {
            parent::__construct($dsn, $username, $passwd, $options);
            $this->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
            $this->exec("SET time_zone = '" . DB_UTC . "'");
            $this->exec("SET names utf8");
        } catch (\PDOException $e) {
            echo $e->getMessage();
        }
    }

    public function selectSqlPrepared($sql_pre) {
        try {
            $STH = $this->prepare($sql_pre);
            $STH->setFetchMode(\PDO::FETCH_ASSOC);
            $STH->execute();
            $result = $STH->fetchAll();
            return $result;
        } catch (\PDOException $e) {
            $this->error($e->getMessage(), $STH->queryString);
        }
    }
    public function updateSqlPrepared($sql_pre) {
        try {
            $STH = $this->prepare($sql_pre);
            $STH->setFetchMode(\PDO::FETCH_ASSOC);
            $STH->execute();
        } catch (\PDOException $e) {
            $this->error($e->getMessage(), $STH->queryString);
        }
    }

    public function addSql($table, $db_array, $ignore = false) {
        if (isset($db_array) and isset($table)) {
            if (is_array($db_array)) {
                $db_keys = array_keys($db_array);
                $db_values = array_values($db_array);
                $sql_pre = "INSERT " . ($ignore ? "IGNORE " : "") . " INTO " . $table . " ("
                        . implode(", ", $db_keys) . ") ";
                $sql_pre .= " values (" . implode(", ", array_fill(0, count($db_keys), "?")) . ")";
                //var_dump($sql_pre);
                try {
                    $this->beginTransaction();
                    $STH = $this->prepare($sql_pre);
                    $STH->execute($db_values);
                    $lastInsertId = $this->lastInsertId();
                    $this->commit();
                    return $lastInsertId;
                } catch (\PDOException $e) {
                    $this->rollBack();
                    echo ($e->getMessage() . $STH->queryString);
                }
            }
            else{
                return "something went wrong #1".$db_array;
            }
        }
        else{
                return "something went wrong #2".$db_array;
            }
    }

    public function error($error, $sqlstring) {
        echo ($error . '/' . $sqlstring);
    }

    public function deleteSql($table, $db_array) {
        if (isset($db_array) and isset($table)) {
            if (is_array($db_array)) {
                $db_keys = array_keys($db_array);
                $db_values = array_values($db_array);
                $sql_pre = "DELETE FROM " . $table . " WHERE ";
                $sql_pre .= implode("=? AND ", $db_keys) . "=? ";
                //var_dump($sql_pre);
                try {
                    $this->beginTransaction();
                    $STH = $this->prepare($sql_pre);
                    $STH->execute($db_values);
                    $this->commit();
                    return $STH->rowCount();
                } catch (\PDOException $e) {
                    $this->rollBack();
                    $this->error($e->getMessage(), $STH->queryString);
                    return false;
                }
            }
        }
    }
    public function updateSql ($table, $db_array, $where, $returnCount = false) {
        if (isset($db_array) and isset($table)) {
            if (is_array($db_array)) {
                $db_keys = array_keys($db_array);
                $db_values = array_values($db_array);
                $sql_pre = "UPDATE " . $table . " SET ";
                $sql_pre .= implode(" = ? , ", $db_keys) . " = ? ";
                $sql_pre .= $where?  " WHERE " . $where : '';
               
                //var_dump($sql_pre);
                try {
                    $this->beginTransaction();
                    $STH = $this->prepare($sql_pre);
                    $STH->execute($db_values);
                    $this->commit();
                    return $returnCount ? $STH->rowCount() : true; 
                } catch (\PDOException $e) {
                    $this->rollBack();
                    $this->error($e->getMessage(), $STH->queryString);
                    return false;
                }
            }
        }
    }
}